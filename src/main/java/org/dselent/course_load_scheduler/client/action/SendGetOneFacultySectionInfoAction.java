package org.dselent.course_load_scheduler.client.action;

public class SendGetOneFacultySectionInfoAction extends Action{
	private Integer id;
	
	public SendGetOneFacultySectionInfoAction(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("SendGetOneFacultySectionInfoAction [id=");
		builder.append(id);
		builder.append("]");
		return builder.toString();
	}

}
