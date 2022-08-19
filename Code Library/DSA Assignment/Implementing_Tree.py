class Node:

    def __init__(self, data):
        self.data = data
        self.children = []
        self.parent = None

    def add_child(self, child):
        child.parent = self
        self.children.append(child)

    def print_tree(self):
        print(self.data)
        for child in self.children:
            child.print_tree()


def build_book_tree():
    root = Node("Programming Languages")
    Type1 = Node("Low_Level")
    Type1.add_child(Node("Binary code"))

    Type2 = Node("Medium_Level")
    Type2.add_child(Node("C++"))

    Type3 = Node("High_Level")
    Type3.add_child(Node("Python"))

    root.add_child(Type1)
    root.add_child(Type2)
    root.add_child(Type3)

    return root


if __name__ == '__main__':
    root = build_book_tree()
    root.print_tree()
    pass
