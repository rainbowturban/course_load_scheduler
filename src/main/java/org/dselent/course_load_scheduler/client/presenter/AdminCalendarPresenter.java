package org.dselent.course_load_scheduler.client.presenter;

public interface AdminCalendarPresenter extends BasePresenter
{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void fillRequests();
	void fillInfo();
	void getRoster();
	void getTerms();
	void getRequests();
	void getEndTimes();
	void getStartTimes();
	void fillCalendarHeader();
	void fillCourseInfo();
	//loads Home page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadHomePage();
    //loads Schedule page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadSchedulePage();
    //loads Course page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadViewCoursesPage();
    //loads Account page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadAccountPage();
	void fillCalendarWithCourses();
	void updateUi();
}
