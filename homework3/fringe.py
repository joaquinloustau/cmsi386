from itertools import izip_longest
def same_fringe(t1, t2):
    def lazy_fringe(t):
        if not t.children:
            yield t
        else:
            for child in t.children:
                for node in lazy_fringe(child):
                    yield node

    for n1, n2 in izip_longest(lazy_fringe(t1), lazy_fringe(t2)):
        if n1.data != n2.data:
            return False
    return True



\\https://docs.python.org/2/library/itertools.html