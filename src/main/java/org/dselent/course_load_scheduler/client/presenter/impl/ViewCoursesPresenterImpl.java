package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.action.*;
import org.dselent.course_load_scheduler.client.event.*;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import java.util.ArrayList;
import java.util.Iterator;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;
import java.util.List;

import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.gwt.user.client.ui.VerticalPanel;



public class ViewCoursesPresenterImpl extends BasePresenterImpl implements ViewCoursesPresenter{

	private IndexPresenter parentPresenter;
	private ViewCoursesView view;
	
	private List<CourseInfo> courses = new ArrayList<CourseInfo>();		
	private boolean adminUser = true;

	@Inject
	public ViewCoursesPresenterImpl(IndexPresenter parentPresenter, ViewCoursesView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);

		//retrieveCourses();
		//fillCourses();
	}
	
	@Override
	public void onLoadViewCourses(LoadViewCoursesEvent evt) {
		retrieveCourses();
		//specifies for both cases, since the page brings over what it had been working on
		adminUser = evt.getAction().getAdminUser();
		if(!adminUser) {
			view.getRemoveCourseButton().setVisible(false);
			view.getEditCourseButton().setVisible(false);
			view.getAddCourseButton().setVisible(false);
		}
		else {
			view.getRemoveCourseButton().setVisible(true);
			view.getEditCourseButton().setVisible(true);
			view.getAddCourseButton().setVisible(true);
		}
		
		
		this.go(parentPresenter.getView().getViewRootPanel());
	}
	
	@Override
	public void onReceiveGetCourseList(ReceiveGetCourseListEvent evt) {
		GWT.log("In ReceiveGetCourseList event handler--fired and received. About to fill courses. CourseList = "+evt.getAction().getCourseList());
		courses = evt.getAction().getCourseList();
		fillCourses();
		
		parentPresenter.hideLoadScreen();
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

		//events for when this page is loaded
		registration = eventBus.addHandler(LoadViewCoursesEvent.TYPE, this);
		eventBusRegistration.put(LoadViewCoursesEvent.TYPE, registration);
		
		registration = eventBus.addHandler(ReceiveGetCourseListEvent.TYPE, this);
		eventBusRegistration.put(ReceiveGetCourseListEvent.TYPE, registration);
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
	public void retrieveCourses() {
		//fires event to get courses
		SendGetCourseListEvent evt = new SendGetCourseListEvent(new SendGetCourseListAction());
		eventBus.fireEvent(evt);
		System.out.println("Fired Event!");
		GWT.log("Fired Event!");
		parentPresenter.showLoadScreen();
		/*
		//uses example values instead of response from service
		CourseInfo course1 = new CourseInfo();
		course1.setCoursesNumber("CS3733");
		course1.setCoursesTitle("Software Engineering");
		course1.setFrequency("TestValue1");
		course1.setFrequencyId(1);
		course1.setCourseId(1);

		CourseInfo course2 = new CourseInfo();
		course2.setCoursesNumber("CS2223");
		course2.setCoursesTitle("Algorithms");
		course2.setFrequency("TestValue 2");
		course2.setFrequencyId(2);
		course2.setCourseId(2);

		CourseInfo course3 = new CourseInfo();
		course3.setCoursesNumber("CS####");
		course3.setCoursesTitle("Something");
		course3.setFrequency("Test value3");
		course3.setFrequencyId(4);
		course3.setCourseId(3);

		courses = new ArrayList<CourseInfo>();

		courses.add(course1);
		courses.add(course2);
		courses.add(course3);*/
	}

	//injects the code for the variable element of the page into
	@Override
	public void fillCourses() {
		//retrieveCourses();
		StackPanel panel = view.getCourseList();
		panel.clear();

		Iterator<CourseInfo> iterator = courses.iterator();

		while(iterator.hasNext()) {
			CourseInfo courseInfo = iterator.next();

			//create label and add it to the course list
			VerticalPanel vp = new VerticalPanel();
			vp.add(new Label("Required Frequency: " + courseInfo.getFrequency()));
			
			Label id = new Label("" + courseInfo.getCoursesId());
			//id.setVisible(false);
			vp.add(id);
			
			panel.add(vp, courseInfo.getCoursesNumber() +": "+ courseInfo.getCoursesTitle());
		}
	}


	//loads the page to edit with the provided index/course
	@Override
	public void loadEditPage() {
		int index = view.getCourseList().getSelectedIndex();//get index of course to edit
		if(index >= 0) {//-1 when nothing is selected			
			Iterator<CourseInfo> ci = courses.listIterator(index);
			CourseInfo course = ci.next();
			
			LoadEditCourseAction action = new LoadEditCourseAction(course);
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
			Iterator<CourseInfo> ci = courses.listIterator(index);
			
			int i = ci.next().getCoursesId();
			
			eventBus.fireEvent(new SendRemoveCourseEvent(new SendRemoveCourseAction(i)));
			
			boolean success = true;//this will be the return value from the request

			if(success) {
				view.getCourseList().remove(index);
			}
		}
	}

	//NAV BAR STUFF
	//loads the home page
	@Override
	public void loadHomePage() {
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction(adminUser)));
	}

	//loads schedule page
	@Override
	public void loadSchedulePage() {
		eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction(adminUser)));
	}
	
	//loads schedule page
	@Override
	public void loadViewCoursesPage() {
		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction(adminUser))); 
	}

	//loads account page
	@Override
	public void loadAccountPage() {
		eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction(adminUser)));
	}

}
