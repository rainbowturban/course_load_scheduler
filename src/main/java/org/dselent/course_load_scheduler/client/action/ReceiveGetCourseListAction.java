package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

public class ReceiveGetCourseListAction extends Action{
	private List<CourseInfo> courseList;

	public ReceiveGetCourseListAction() {
		courseList = null;
	}
	
	public ReceiveGetCourseListAction(List<CourseInfo> courseList) {
		this.courseList = courseList;
	}
	
	public List<CourseInfo> getCourseList() {
		return courseList;
	}

	public void setCourseList(List<CourseInfo> courseList) {
		this.courseList = courseList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(courseList);

		return sb.toString();
	}
	
}
