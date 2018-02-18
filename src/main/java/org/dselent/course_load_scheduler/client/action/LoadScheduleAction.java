package org.dselent.course_load_scheduler.client.action;

public class LoadScheduleAction {
boolean adminUser;//true if admin, false if not
	
	public LoadScheduleAction() {
		adminUser = false;
	}
	
	public LoadScheduleAction(boolean adminUser) {
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
