#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int n, q, k, el;
    cin >> n >> q;
    vector<vector<int>> va(n);
    for (int i = 0; i < n; i++)
    {
        cin >> k;
        vector<int> vec1;
        for (int j = 0; j < k; j++)
        {
            cin >> el;
            vec1.push_back(el);
        }
        va[i] = vec1;
    }

    for (int z = 0; z < q; z++)
    {
        int i, j;
        cin >> i >> j;
        cout << va[i][j] << endl;
    }

    return 0;
}