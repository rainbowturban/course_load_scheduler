package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.AccountInfo;

public class ReceiveGetAllAccountAction extends Action{
	private AccountInfo accounts;
	
	public ReceiveGetAllAccountAction(AccountInfo accounts) {
		this.accounts = accounts;
	}
	
	public AccountInfo GetAllAccountsInfo() {
		return accounts;
	}

	public void setAccounts(AccountInfo accounts) {
		this.accounts = accounts;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(accounts);

		return sb.toString();
	}
}
