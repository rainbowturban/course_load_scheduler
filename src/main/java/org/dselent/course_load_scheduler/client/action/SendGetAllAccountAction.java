package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.AccountInfo;

public class SendGetAllAccountAction extends Action{
	private AccountInfo Account;

	public SendGetAllAccountAction() {
		Account = null;
	}
	
	public SendGetAllAccountAction(AccountInfo account) {
		this.Account = account;
	}
	
	public AccountInfo getAllAccountInfo() {
		return Account;
	}

	public void setAccount(AccountInfo account) {
		this.Account = account;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(Account);

		return sb.toString();
	}
}
