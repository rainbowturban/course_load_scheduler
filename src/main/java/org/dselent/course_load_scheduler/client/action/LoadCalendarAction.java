package org.dselent.course_load_scheduler.client.action;

public class LoadCalendarAction extends Action{
	boolean adminUser;//true if admin, false if not

	public LoadCalendarAction() {
		adminUser = false;
	}

	public LoadCalendarAction(boolean adminUser) {
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
