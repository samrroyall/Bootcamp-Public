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


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = [BankAccount(0.01)]

    def make_deposit(self, amount, account_id = 0):
        assert account_id > 0 and account_id < len(self.accounts), "account ID is either negative or too large"
        self.accounts[account_id].deposit(amount)
        return self

    def make_withdrawal(self, amount, account_id = 0):
        assert account_id > 0 and account_id < len(self.accounts), "account ID is either negative or too large"
        self.accounts[account_id].withdraw(amount)
        return self

    def display_user_balance(self, account_id = 0):
        assert account_id > 0 and account_id < len(self.accounts), "account ID is either negative or too large"
        self.accounts[account_id].display_account_info()
        return self

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

    def add_account(self):
        self.accounts.append(BankAccount(0.01))
        return self

