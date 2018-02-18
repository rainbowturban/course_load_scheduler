package org.dselent.course_load_scheduler.client.action;

public class LoadHomePageAction {
	boolean adminUser;//true if admin, false if not

	public LoadHomePageAction(boolean adminUser) {
		this.adminUser = adminUser;
	}

	public LoadHomePageAction() {
		this.adminUser = false;
	}

	public boolean isAdminUser() {
		return adminUser;
	}

	public void setAdminUser(boolean adminUser) {
		this.adminUser = adminUser;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("LoadHomePageAction [adminUser=");
		builder.append(adminUser);
		builder.append("]");
		return builder.toString();
	}

}
