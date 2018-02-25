package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.Courses;

public class SendEditCourseAction extends Action{
	private Courses course;

	public SendEditCourseAction() {
		course = null;
	}
	
	public SendEditCourseAction(Courses course) {
		this.course = course;
	}
	
	public Courses getCourseInfo() {
		return course;
	}

	public void setCourse(Courses courses) {
		this.course = courses;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(course);

		return sb.toString();
	}
}
