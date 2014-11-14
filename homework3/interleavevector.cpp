#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

template<class T>
vector<T> interleave(vector<T> x, vector<T> y) {
  vector<T> result = {};
  int sizex = x.size();
  int sizey = y.size();
  int n = max(sizex, sizey);
  for (int i = 0; i < n; i++) {
    if (i < sizex) {
    	result.push_back(x[i]);
    }
    if (i < sizey) {
    	result.push_back(y[i]);
    }
  }
  return result;
}



int main(int argc, char const *argv[]) {
	int x[5] = {1,3,5,7,9};
	int y[6] = {0,2,4,6,8,10};
	int* c = interleave(y, 6, x, 5);
	for (int i = 0; i < 11; i++) {
		cout << c[i] << '\n';
	}
	return 0;
}