package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.Courses;

/**
 * Events are "fired" and sent on the event bus to be sent to an applicable event handler
 * This event is for passing information to an edit section so it knows what course is
 * being 
 * 
 * @author hjauris
 *
 */
public class LoadEditCourseAction {

	//CourseInfo is for information display, course is for the ID's.
	private CourseInfo courseInfo;
	private Courses course;//This should by the same course as the one in CourseInfo
	
	public LoadEditCourseAction() {
		courseInfo = null;
	}
	
	public LoadEditCourseAction(CourseInfo course) {
		courseInfo = course;
	}
	
	public CourseInfo getCourseInfo() {
		return courseInfo;
	}
	
	public Courses getCourse() {
		return course;
	}
	
	public void setCourseInfo(CourseInfo courseInfo) {
		this.courseInfo = courseInfo;
	}
	
	public void setCourse(Courses courses) {
		course = courses;
	}
	
	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();
		
		sb.append(courseInfo);
		sb.append(course);
		
		return sb.toString();
	}
}
