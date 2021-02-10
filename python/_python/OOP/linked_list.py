class SLNode:
    def __init__(self, val):
        self.value = nal
        self.next = None

class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        new_node = SLNode(val)
        new_node.next = self.head
        self.head = new_node
        return self

    def remove_from_front(self):
        if self.head == None:
            return None

        val = self.head.value
        self.head = self.head.next 
        return val

    def add_to_back(self, val):
        if self.head == None:
            self.add_to_fron(val)
            return self

        new_node = SLNode(val)
        ptr = self.head
        while ptr.next != None:
            ptr = ptr.next
        ptr.next = new_node 
        return self

    def remove_from_back(self):
        if self.head == None:
            return None
        elif self.head.next == None:
            self.remove_from_front()

        ptr = self.head
        while ptr.next.next != None:
            ptr = ptr.next
        val = ptr.next.value
        ptr.next = None
        return val

    def remove_val(self, val):
        if self.head == None:
            return
        elif self.head.value == val:
            self.remove_from_front()
            return

        ptr = self.head
        while ptr.next != None and ptr.next.val != val:
            ptr = ptr.next
        if ptr.next.val == val:
            ptr.next = ptr.next.next
        return

    def insert_at(self, val, n):
        if n == 0:
            self.add_to_front(val)
            return

        assert self.head != None, \
            f"Cannot insert node at index {n}: list is empty."

        i = 0
        ptr = self.head
        while (ptr.next != None and i < n-1):
            ptr = ptr.next

        assert ptr.next != None, \
            f"SList index out-of-bounds."

        new_node = SLNode(val)
        new_node.next = ptr.next
        ptr.next = new_node
        return

    def print_values(self):
        ptr = self.head
        while ptr != None:
            print(ptr.value)
            ptr = ptr.next
        return self
