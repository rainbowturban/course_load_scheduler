package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.CourseSections;

public class LoadEditSectionAction extends Action{
	private CourseInfo courseInfo;
	private CourseSections sectionInfo;

	public CourseInfo getCourseInfo() {
		return courseInfo;
	}

	public void setCourseInfo(CourseInfo courseInfo) {
		this.courseInfo = courseInfo;
	}
	
	public CourseSections getSectionInfo() {
		return sectionInfo;
	}

	public void setSectionInfo(CourseSections sectionInfo) {
		this.sectionInfo = sectionInfo;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(courseInfo);

		return sb.toString();
	}
}
