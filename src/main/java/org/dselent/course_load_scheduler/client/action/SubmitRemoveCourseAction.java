package org.dselent.course_load_scheduler.client.action;

public class SubmitRemoveCourseAction {
int id;
	
	public SubmitRemoveCourseAction() {
		id = -1;
	}
	
	public SubmitRemoveCourseAction(int id) {
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
