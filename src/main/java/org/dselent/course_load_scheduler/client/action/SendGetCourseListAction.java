package org.dselent.course_load_scheduler.client.action;

public class SendGetCourseListAction extends Action{
	private Integer termId;

	public SendGetCourseListAction() {
		termId = null;
	}
	
	public SendGetCourseListAction(Integer termId) {
		this.termId = termId;
	}
	
	public Integer getTermId() {
		return termId;
	}

	public void setTermId(Integer termId) {
		this.termId = termId;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(termId);

		return sb.toString();
	}
	
}
