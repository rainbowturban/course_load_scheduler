package org.dselent.course_load_scheduler.client.action;

public class SendGetUsersAction extends Action{
	private Integer userId;

	public SendGetUsersAction() {
		userId = null;
	}
	
	public SendGetUsersAction(Integer userId) {
		this.userId = userId;
	}
	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(userId);

		return sb.toString();
	}

}
