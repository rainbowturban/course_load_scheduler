package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.User;

public class LoadHomePageAction extends Action{
	User model;//hold id, if admin, etc.

	public LoadHomePageAction(User model) {
		this.model = model;
	}

	public LoadHomePageAction() {
		this.model = null;
	}

	public User getUser() {
		return model;
	}

	public void setUser(User model) {
		this.model = model;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("LoadHomePageAction [adminUser=");
		builder.append(model);
		builder.append("]");
		return builder.toString();
	}

}
