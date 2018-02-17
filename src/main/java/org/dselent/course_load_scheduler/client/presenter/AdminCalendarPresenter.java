package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.RequestTables;

public interface AdminCalendarPresenter extends BasePresenter
{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
<<<<<<< HEAD

=======
	
>>>>>>> 4834805425ca539cc10c5c37d359e4ed512c833c
	void fillRequests();
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
