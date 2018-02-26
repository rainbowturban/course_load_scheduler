package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.AccountInfo;

public class ReceiveGetUsersAction extends Action{
	private List<AccountInfo> userList;

	public ReceiveGetUsersAction() {
		userList = null;
	}
	
	public ReceiveGetUsersAction(List<AccountInfo> userList) {
		this.userList = userList;
	}
	
	public List<AccountInfo> getUserList() {
		return userList;
	}

	public void setUserList(List<AccountInfo> userList) {
		this.userList = userList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(userList);

		return sb.toString();
	}
	

}
