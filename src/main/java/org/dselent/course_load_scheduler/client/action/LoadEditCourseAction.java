package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.User;

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
    private User model;
	
	public LoadEditCourseAction() {
		courseInfo = null;
		model = null;
	}
	
	public LoadEditCourseAction(CourseInfo course, User model) {
		courseInfo = course;
		this.model = model;
	}
	
	public CourseInfo getCourseInfo() {
		return courseInfo;
	}
	
	public void setCourseInfo(CourseInfo courseInfo) {
		this.courseInfo = courseInfo;
	}
	
	public User getUser() {
		return model;
	}

	public void setUser(User model) {
		this.model = model;
	}
	
	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();
		
		sb.append(courseInfo);
		sb.append(model);
		
		return sb.toString();
	}
}
