# Time module
import time # importing time module

# print(time.localtime()) # localtime represent time as a tuple
# print(time.gmtime()) # converts time string to tuple which is same as above
# print(time.asctime()) # asctime represent time as a string
# print(time.ctime()) # This is same as below, converts time into string seconds
# print(time.asctime(t.localtime()))

# program which greet you according to time
interval = time.strftime('%H:%M:%S')
print(interval)
if (interval > '24:00:00' and interval < '12:00:00'):
    print('Good Morning Sir')
elif (interval >= '12:00:00' and interval < '18:00:00'):
    print('Good Afternoon Sir')
elif (interval >= '18:00:00' and interval <= '24:00:00'):
    print('Good Night Sir')
else:
    print('Have a nice day')