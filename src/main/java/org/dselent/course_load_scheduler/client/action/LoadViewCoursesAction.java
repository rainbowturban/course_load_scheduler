package org.dselent.course_load_scheduler.client.action;

public class LoadViewCoursesAction {
	boolean adminUser;//true if admin, false if not
	
	public LoadViewCoursesAction() {
		adminUser = false;
	}
	
	public LoadViewCoursesAction(boolean adminUser) {
		this.adminUser = adminUser;
	}
	
	public boolean getAdminUser() {
		return adminUser;
	}

	public void setAdminUser(boolean adminUser) {
		this.adminUser = adminUser;
	}
	
	@Override
	public String toString()
	{
		return "Admin User: " + adminUser;
	}
	
	
}
