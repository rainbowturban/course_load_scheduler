package org.dselent.course_load_scheduler.client.action;

public class ReceiveRemoveCourseAction extends Action{
	private int id;
	private boolean success;
	
	public ReceiveRemoveCourseAction(int id, boolean success) {
		this.id = id;
		this.success = success;
	}
	

	public int getId() {
		return id;
	}

	public boolean getSuccess() {
		return success;
	}
	
	
	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(id);
		sb.append(success);

		return sb.toString();
	}
}
