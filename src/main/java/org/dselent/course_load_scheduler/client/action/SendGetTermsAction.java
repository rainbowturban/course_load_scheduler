package org.dselent.course_load_scheduler.client.action;

public class SendGetTermsAction extends Action{
	private Integer courseId;

	public SendGetTermsAction() {
		courseId = null;
	}
	
	public SendGetTermsAction(Integer courseId) {
		this.courseId = courseId;
	}
	
	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(courseId);

		return sb.toString();
	}

}
