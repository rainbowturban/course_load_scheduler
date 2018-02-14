package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

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
	
	
	//gets information about courses to fill the page with
	@Override
	public List<CourseInfo> retrieveCourses() {
		//************get courses returned in a list of CourseInfo objects*****
		
		//**iterate through list, creating a grid row entry for each object?***
		//^^This would probably implement the injector thing, whatever that actually does.
		List<CourseInfo> courses = new ArrayList<CourseInfo>();
		
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
		
		List<CourseInfo> courses = retrieveCourses();
		Iterator<CourseInfo> iterator = courses.iterator();
		
		
		while(iterator.hasNext()) {
			CourseInfo courseInfo = iterator.next();

			//create label and add it to the course list
			Label label = new Label("Required Frequency: " + courseInfo.getFrequency());
			panel.add(label, courseInfo.getCoursesNumber() +": "+ courseInfo.getCoursesTitle());
		}
		
		
		view.setCourseList(panel);
	}

	

	
	
	
}
