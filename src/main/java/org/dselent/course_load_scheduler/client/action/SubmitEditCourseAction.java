package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.Courses;

public class SubmitEditCourseAction {
	private Courses course;

	public SubmitEditCourseAction() {
		course = null;
	}
	
	public SubmitEditCourseAction(Courses course) {
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
