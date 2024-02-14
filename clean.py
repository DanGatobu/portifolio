import datetime
import pandas as pd
import MetaTrader5 as mt5
import schedule
import time as tt
def fget_data(currency,num_c):
    mt5.initialize()
    ohlc_data = pd.DataFrame(mt5.copy_rates_from_pos(currency, mt5.TIMEFRAME_M15, 0,num_c))
    ohlc_data.rename(columns={'open': 'Open', 'high': 'High', 'low': 'Low', 'close': 'Close'}, inplace=True)
    ohlc_data.dropna(inplace=True)

    return ohlc_data

def distance_checker(price,value,lim):
    plh=price-value
    plh=abs(plh)
    if plh >lim:
        print('dist okay')
        return 1
    else:
        return 0
    
def find_status(data,size):
    data['AbsDiff'] = abs(data['Close'] - data['Open'])

# Find the maximum value among the calculated differences
    max_diff = data['AbsDiff'].max()
    if max_diff>size:
        print('status okay')
        return 1
    else:
        return 0
    
def find_sl(data,tp):
    if tp==-1:
        max_value = data['High'].max()
        return max_value
    else:
        min_value = data['Low'].min()
        return min_value   

begin_max_value=2043.33
begin_min_value=2023.48

def get_first_values():
    global begin_max_value
    global begin_min_value
    nowd=fget_data('GOLD',110)
    nowd['mtime']=pd.to_datetime(nowd['time'],unit='s')
    last_row = nowd.iloc[-2]
    target_date = last_row['mtime'].date()
    day_data = nowd[nowd['mtime'].dt.date == target_date]
    max_price = day_data['High'].max()
    min_price = day_data['Low'].min()
    print(f'prev_prev vaues beginmin :{begin_min_value} beginmax{begin_max_value}')
    begin_max_value = max_price
    begin_min_value = min_price
    print(f'now_prev values beginmin{begin_min_value} beginmax{begin_max_value}')

def update_min_max():
    global begin_max_value
    global begin_min_value
    nowd=fget_data('GOLD',110)
    nowd['mtime']=pd.to_datetime(nowd['time'],unit='s')
    last_row = nowd.iloc[-2]
    minv=begin_min_value
    maxv=begin_max_value
    price=last_row['Close']
    if price>maxv:
        begin_max_value=last_row['High']
        print('oooo')
    elif price<minv:
        begin_min_value=last_row['Low']
        print('bbbb')
        
def closetrade():
    nowd=fget_data('GOLD',110)
    pos_info = mt5.positions_total()
    if pos_info is None:
        pass
    elif pos_info>1:
        for position in mt5.positions_get():
            for position in mt5.positions_get():
                if position.symbol.startswith('GOLD'):
                    if position.profit>5:
                 # Your existing code
                        order_type = position.type
                        symbol = position.symbol
                        volume = position.volume
                        if order_type == mt5.ORDER_TYPE_BUY:
                            order_type = mt5.ORDER_TYPE_SELL
                            price = mt5.symbol_info_tick(symbol).bid
                        else:
                            order_type = mt5.ORDER_TYPE_BUY
                            price = mt5.symbol_info_tick(symbol).ask

                        close_request = {
                            "action": mt5.TRADE_ACTION_DEAL,
                            "symbol": symbol,
                            "volume": float(volume),
                            "type": order_type,
                            "position": position.ticket,
                            "price": price,
                            "magic": 20022,
                            "comment": "Close trade",
                            "type_time": mt5.ORDER_TIME_GTC,
                            "type_filling": mt5.ORDER_FILLING_IOC,
                        }

                        mt5.order_send(close_request)

                 
def agent1():
    global begin_max_value
    global begin_min_value
    nowd=fget_data('GOLD',110)
    nowd['mtime']=pd.to_datetime(nowd['time'],unit='s')
    last_row = nowd.iloc[-2]
    pg=last_row['mtime'].time()
    mrgtime=pd.to_datetime('03:00:00').time()
    if pg ==mrgtime:
        print("agent called update of first values")
        get_first_values()
        
        
    if pg==datetime.time(23,30):
        closetrade()
            
    if datetime.time(3, 0) <= pg <= datetime.time(16, 30):
        
        maxv=begin_max_value
                # print(maxv)
        minv=begin_min_value
        pos_info = mt5.positions_total()
        if pos_info is None:
            pass

        # Check if there are open positions or active orders
        elif pos_info==0:
            price=last_row['Close']
            if price>maxv:
                    if distance_checker(price,maxv,1.5)==0:
                        begin_max_value=last_row['High']
                    elif distance_checker(price,maxv,1.5)==1:
                        # print('i am here 4')
                        win_data=nowd.tail(6)
                        if find_status(win_data,1.5):

                            sl_data=nowd.tail(3)
                            sl=int(find_sl(sl_data,1))-1.5
                            tp=price+5
                            begin_max_value=last_row['High']
                            lot=0.01
                            deviation=1
                            request = {"action": mt5.TRADE_ACTION_DEAL,"symbol": 'GOLD',"volume": lot,"type": mt5.ORDER_TYPE_BUY,"price": price,"sl": sl,"tp": tp,"deviation": deviation,"magic": 20022,"comment": "python script open","type_time": mt5.ORDER_TIME_GTC,"type_filling": mt5.ORDER_FILLING_IOC,}
                            mt5.order_send(request)

            elif price<minv:
                if distance_checker(price,minv,1.5)==0:
                    begin_min_value=last_row['Low']

                elif distance_checker(price,maxv,1.5)==1:
                    # print('i am here 4')
                    win_data=nowd.tail(6)
                    if find_status(win_data,1.5):

                        sl_data=nowd.tail(3)
                        sl=int(find_sl(sl_data,-1))+1.5
                        tp=price-5
                        begin_min_value=last_row['Low']
                        lot=0.01
                        deviation=1
                        request = {"action": mt5.TRADE_ACTION_DEAL,"symbol": 'GOLD',"volume": lot,"type": mt5.ORDER_TYPE_SELL,"price": price,"sl": sl,"tp": tp,"deviation": deviation,"magic": 20022,"comment": "python script open","type_time": mt5.ORDER_TIME_GTC,"type_filling": mt5.ORDER_FILLING_IOC,}
                        mt5.order_send(request)
    



                    

def run_schedule():
    schedule.every().hour.at(':15').do(agent1)
    schedule.every().hour.at(':30').do(agent1)
    schedule.every().hour.at(':45').do(agent1)
    schedule.every().hour.at(':00').do(agent1)
    schedule.every().hour.at(':22').do(update_min_max)
    schedule.every().hour.at(':36').do(update_min_max)
    schedule.every().hour.at(':54').do(update_min_max)
    schedule.every().hour.at(':08').do(update_min_max)

    while True:
        schedule.run_pending()
        tt.sleep(1)

run_schedule()       