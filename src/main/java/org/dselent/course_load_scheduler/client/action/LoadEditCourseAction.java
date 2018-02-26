package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

/**
 * Events are "fired" and sent on the event bus to be sent to an applicable event handler
 * This event is for passing information to an edit section so it knows what course is
 * being 
 * 
 * @author hjauris
 *
 */
public class LoadEditCourseAction extends Action{

	//CourseInfo is for information display, course is for the ID's.
	private CourseInfo courseInfo;	
	
	public LoadEditCourseAction() {
		courseInfo = null;
	}
	
	public LoadEditCourseAction(CourseInfo course) {
		courseInfo = course;
	}
	
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
