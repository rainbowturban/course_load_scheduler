package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.User;

public class LoadScheduleAction extends Action{
	User model;//true if admin, false if not
	
	public LoadScheduleAction() {
		model = null;
	}
	
	public LoadScheduleAction(User model) {
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
		return "Admin User: " + model;
	}
}
