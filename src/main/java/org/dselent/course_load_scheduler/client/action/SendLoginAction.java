package org.dselent.course_load_scheduler.client.action;

public class SendLoginAction extends Action
{
	private String userName;
	private String password;
	
	public SendLoginAction(String userName, String password)
	{
		this.userName = userName;
		this.password = password;
	}

	public String getUserName()
	{
		return userName;
	}

	public String getPassword()
	{
		return password;
	}

	@Override
	public String toString()
	{
		StringBuilder builder = new StringBuilder();
		builder.append("SendLoginAction [userName=");
		builder.append(userName);
		builder.append(", password=");
		builder.append(password);
		builder.append("]");
		return builder.toString();
	}
}
