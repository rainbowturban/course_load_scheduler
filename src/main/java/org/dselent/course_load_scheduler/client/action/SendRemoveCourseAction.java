package org.dselent.course_load_scheduler.client.action;

public class SendRemoveCourseAction extends Action{
int id;
	
	public SendRemoveCourseAction() {
		id = -1;
	}
	
	public SendRemoveCourseAction(int id) {
		this.id = id;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(id);

		return sb.toString();
	}
}
