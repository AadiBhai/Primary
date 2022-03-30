#include<iostream>
#include<fstream>

using namespace std;

int main(){
    string st = "Aadi bhai";
    // Opening files using constructor and writing it
    ofstream out("sample60.txt"); // Write operation
    out<<st;

    return 0;
}

// #include<iostream>
// #include<fstream>

// using namespace std;

// int main(){
//     string st2;
//     // Opening files using constructor and reading it
//     ifstream in("sample60b.txt"); // Read operation
//     // in>>st2;//This will only read first word/term
//     getline(in, st2);  //This will read the whole line
//     cout<<st2;

//     return 0;
// }