package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.User;

public class LoadAddCourseAction extends Action{
	private User model;
	
	public LoadAddCourseAction() {
		model = null;
	}
	
	public LoadAddCourseAction(User model) {
		this.model = model;
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
		return "User: " + model;
	}
}
