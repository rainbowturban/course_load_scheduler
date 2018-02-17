package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;

public class LoadEditSectionAction {
	private CourseInfo courseInfo;
	private SectionsInfo sectionInfo;

	public CourseInfo getCourseInfo() {
		return courseInfo;
	}

	public void setCourseInfo(CourseInfo courseInfo) {
		this.courseInfo = courseInfo;
	}
	
	public SectionsInfo getSectionInfo() {
		return sectionInfo;
	}

	public void setSectionInfo(SectionsInfo sectionInfo) {
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
