package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.action.LoadAddCourseAction;
import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.event.LoadAddCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import java.util.ArrayList;
import java.util.Iterator;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;
import java.util.List;

import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.StackPanel;



public class ViewCoursesPresenterImpl extends BasePresenterImpl implements ViewCoursesPresenter{

	private IndexPresenter parentPresenter;
	private ViewCoursesView view;


	@Inject
	public ViewCoursesPresenterImpl(IndexPresenter parentPresenter, ViewCoursesView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);

		fillCourses();

		//TODO:***Remove buttons if not admin user! (or only have view button, depending on how stuff is implemented)**
		/*if(!userAdmin){		
			view.getRemoveCourseButton().setVisible(false);
			view.getEditCourseButton().setVisible(false);
			view.getAddCourseButton().setVisible(false);
		}*/
	}

	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;

		//button events for when they click on edit or remove buttons
		//registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		//eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}

	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}

	//returns the view for the presenter
	@Override
	public ViewCoursesView getView() {
		return view;
	}

	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}

	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}


	//gets information about courses to fill the page with
	@Override
	public List<CourseInfo> retrieveCourses() {
		List<CourseInfo> courses = new ArrayList<CourseInfo>();		

		//TODO: instead of this, access DB to get courses
		CourseInfo course1 = new CourseInfo();
		course1.setCoursesNumber("CS3733");
		course1.setCoursesTitle("Software Engineering");
		course1.setFrequency("4 Times/Year");

		CourseInfo course2 = new CourseInfo();
		course2.setCoursesNumber("CS2223");
		course2.setCoursesTitle("Algorithms");
		course2.setFrequency("2 Times/Year");

		CourseInfo course3 = new CourseInfo();
		course3.setCoursesNumber("CS####");
		course3.setCoursesTitle("Something...");
		course3.setFrequency("-5 Times/Year");


		courses.add(course1);
		courses.add(course2);
		courses.add(course3);


		return courses;
	}

	//injects the code for the variable element of the page into
	@Override
	public void fillCourses() {
		StackPanel panel = view.getCourseList();
		panel.clear();

		List<CourseInfo> courses = retrieveCourses();
		Iterator<CourseInfo> iterator = courses.iterator();


		while(iterator.hasNext()) {
			CourseInfo courseInfo = iterator.next();

			//create label and add it to the course list
			Label label = new Label("Required Frequency: " + courseInfo.getFrequency());
			panel.add(label, courseInfo.getCoursesNumber() +": "+ courseInfo.getCoursesTitle());
		}


		//view.setCourseList(panel);
	}


	//loads the page to edit with the provided index/course (TODO: work out parameters)
	@Override
	public void loadEditPage() {
		int index = view.getCourseList().getSelectedIndex();//what is to be removed? get the index.
		if(index >= 0) {//-1 when nothing is selected
			
			LoadEditCourseAction action = new LoadEditCourseAction();
			Courses courses = new Courses();
			//TODO:***************FILL this with actual ways to get this information!
			courses.setFrequencyID(4);
			courses.setTitle("Testing...");
			courses.setNumber("Number...");
			action.setCourse(courses);
			
			LoadEditCourseEvent evt = new LoadEditCourseEvent(action);
			eventBus.fireEvent(evt);
		}
	}

	//loads the page to add a course
	@Override
	public void loadAddPage() {		
		eventBus.fireEvent(new LoadAddCourseEvent(new LoadAddCourseAction()));
		
	}


	//sends the index of a course to be removed from the database.
	//returns true if it was removed successfully, false otherwise.
	@Override
	public void removeCourse() {
		int index = view.getCourseList().getSelectedIndex();//what is to be removed? get the index.
		
		if(index >= 0) {
			//TODO: Send correct Index--for DB not just the clientSide
			boolean success = true;//this will be the return value from the request
			
			if(success) {
				view.getCourseList().remove(index);
			}
		}
	}

	//NAV BAR STUFF
	//loads the home page (TODO: work out parameters, determine between Admin/User??)
	@Override
	public void loadHomePage() {
		//TODO: Should this be an event?
		//event would have information as follows?: If user is admin (although they should be),


		final Injector injector = Injector.INSTANCE;
		//HomePresenterImpl homePresenter = injector.getHomePresenter();
		//homePresenter.init();
		//homePresenter.go(parentPresenter.getView().getViewRootPanel());
	}

	//loads schedule page (TODO: how to differentiate between admin/user??)
	@Override
	public void loadSchedulePage() {

		//If admin user
		final Injector injector = Injector.INSTANCE;
		AdminCalendarPresenterImpl adminCalendarPresenter = injector.getAdminCalendarPresenter();
		adminCalendarPresenter.init();
		adminCalendarPresenter.go(parentPresenter.getView().getViewRootPanel());
		
		//If normal user
		//normal schedule presenter here when created
	}
	
	//loads courses page (viewing) (TODO: work out parameters, determine between Admin/User??)
	@Override
	public void loadViewCoursesPage() {
		//TODO: Should this be an event?
		//event would have information as follows?: If user is admin (although they should be),


		final Injector injector = Injector.INSTANCE;
		//ViewCoursesPresenterImpl viewCoursesPresenter = injector.getViewCoursesPresenter();
		//viewCoursesPresenter.init();
		//viewCoursesPresenter.go(parentPresenter.getView().getViewRootPanel());
	}
	
	//loads account page (TODO: work out parameters, determine between Admin/User??)
	@Override
	public void loadAccountPage() {
		//TODO: Should this be an event?
		//event would have information as follows?: If user is admin (although they should be),


		final Injector injector = Injector.INSTANCE;
		//AccountPresenterImpl accountPresenter = injector.getAccountPresenter();
		//accountPresenter.init();
		//accountPresenter.go(parentPresenter.getView().getViewRootPanel());
	}

}
