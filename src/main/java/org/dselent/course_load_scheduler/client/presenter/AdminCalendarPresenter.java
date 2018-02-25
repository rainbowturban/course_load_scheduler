package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.EndTime;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.RequestTables;
import org.dselent.course_load_scheduler.client.model.StartTime;
import org.dselent.course_load_scheduler.client.model.Terms;

public interface AdminCalendarPresenter extends BasePresenter
{
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void fillRequests();
	void fillInfo();
	List<Faculty> getRoster();
	List<Terms> getTerms();
	List<RequestTables> retrieveRequests();
	List<EndTime> getEndTimes();
	List<StartTime> getStartTimes();
	void fillCalendar();
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
}
