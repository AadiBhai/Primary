#include<iostream>
using namespace std;

// max tender

// int main()
// {
//     int tender_id, max_id, n, i;
//     float tender_amt, max_tender=0;

//     cout<<"\n enter no of tenders ";
//     cin>>n;
//     for (i=1; i<=n; i++)
//     {
//         cin>>tender_id>>tender_amt;
//         if (tender_amt>max_tender)
//         {
//             max_tender=tender_amt;
//             max_id=tender_id;
//         }
//     }
//     cout<<"\n maximum tender_id= "<<max_id;
//     cout<<"\n maximum tender_amt= "<<max_tender;
    
//     return 0;
// }

// counting zeros, negative integers and positive integers from a set

int main()
{
    int no, not_int = 0, zeros = 0, neg_no = 0, pos_no = 0, i = 1;
    
        cout<<"enter the numbers below \n";
        
    // you can use any loop statement here
    for (i=1; i<=10; i++)
    {
        cin>>no;
        if(no==0)
        ++zeros;
        else if(no>0)
        ++pos_no;
        else if(no<0)
        ++neg_no;
        else
        ++not_int;
        
    }

    cout<<"\n no of zeros= "<<zeros;
    cout<<"\n no of positive integers = "<<pos_no;
    cout<<"\n no of negative integers = "<<neg_no;
    cout<<"\n number is/are not integers = "<<not_int;

    return 0;
}