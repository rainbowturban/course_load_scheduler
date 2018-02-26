package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.User;

public class ManageUserPageAction extends Action{
	User model;//true if admin, false if not
	
	public ManageUserPageAction() {
		model = null;
	}
	
	public ManageUserPageAction(User model) {
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
