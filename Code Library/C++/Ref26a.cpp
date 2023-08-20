// Array of object and passing objects as function argument

#include<iostream>
using namespace std;

class employee{
    int id;
    int salary;
    public:
    void setId(void){
        cout<<"Enter the Id of employee "<<endl;
        cin>>id;
    }
    void getId(void){
        cout<<"The id of employee is "<<id<<endl;
    }
};

int main()
{
    // employee Aaditya, Saurabh;
    // Aaditya.setId();
    // Aaditya.getId();

employee fb[4];

for(int i = 0; i<4; i++){
    fb[i].setId();
    fb[i].getId();
}

    return 0;
}