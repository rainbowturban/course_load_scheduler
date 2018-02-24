package org.dselent.course_load_scheduler.client.action;

public class ReceiveRemoveSectionAction extends Action{
	private int id;
	private boolean success;
	
	public ReceiveRemoveSectionAction(int id, boolean success) {
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
