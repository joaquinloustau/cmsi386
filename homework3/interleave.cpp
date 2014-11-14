#include <iostream>
#include <stdlib.h>
using namespace std;

int* interleave(int x[], size_t sizex, int y[], size_t sizey) {
	int* result = new int[sizex + sizey];
	int n = sizex > sizey ? sizex : sizey;
	for (int i = 0, j = 0; j < n; j++) {
		if (j < sizex) {
			result[i++] = x[j];
		} 
		if (j < sizey) {
			result[i++] = y[j];
		}
	}
	return result;
}

int main(int argc, char const *argv[]) {
	int a[5] = {1,3,5,7,9};
	int b[6] = {0,2,4,6,8,10};
	int* c = interleave(b, 6, a, 5);
	for (int i = 0; i < 11; i++) {
		cout << c[i] << '\n';
	}
	return 0;
}