package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

public class LoadEditSectionAction {
	private CourseInfo courseInfo;

	public CourseInfo getCourseInfo() {
		return courseInfo;
	}


	public void setCourseInfo(CourseInfo courseInfo) {
		this.courseInfo = courseInfo;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(courseInfo);

		return sb.toString();
	}
}
