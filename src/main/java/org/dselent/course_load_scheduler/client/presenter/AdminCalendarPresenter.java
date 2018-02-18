package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.RequestTables;

public interface AdminCalendarPresenter extends BasePresenter
{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void fillRequests();
	void fillInfo();
	List<Faculty> getRoster();
	List<RequestTables> retrieveRequests();
	//loads Home page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadHomePage();
    //loads Schedule page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadSchedulePage();
    //loads Course page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadViewCoursesPage();
    //loads Account page (TODO: work out parameters, differentiate btwn admin and user homepages?)
    void loadAccountPage();
}
