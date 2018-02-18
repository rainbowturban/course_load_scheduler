package org.dselent.course_load_scheduler.client.presenter;

public interface ManageUserPresenter extends BasePresenter {

	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void manageUser();
	void loadAccountPage();
	void loadSchedulePage();
	void loadViewCoursesPage();
	void loadViewHomePage();
	
	
}
