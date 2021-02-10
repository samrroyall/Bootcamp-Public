class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}, Interest: {self.int_rate}")
        return self

    def yield_interest(self):
        self.balance = self.balance * (1 + self.int_rate) if self.balance > 0 else self.balance
        return self

