package org.dselent.course_load_scheduler.client.presenter;

public interface HomePresenter extends BasePresenter{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	
	//nav stuff
	public void loadAccountPage();
	public void loadSchedulePage();
	public void loadViewCoursesPage();
	public void loadHomePage();
}
