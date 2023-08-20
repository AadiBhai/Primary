#include <iostream>
#include <cmath>
using namespace std;

class point
{
    int x, y;

public:
    friend float distance(point, point);
    point(float a, float b)
    {
        x = a;
        y = b;
    }
};

    float distance(point m, point n)
    {
        float power1, power2, dist;
        power1 = pow(m.x - n.x, 2);
        power2 = pow(m.y - n.y, 2);
        dist = sqrt(power1 + power2);
        cout << "The distance between point p and q is " << dist << endl;
    }

int main()
{
    point p(0, 1);
    point q(0, 5);
    distance(p, q);

    return 0;
}